// Render Prop
import React, {useEffect, useRef, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {
  Alert, AlertDescription,
  AlertIcon, AlertTitle,
  Box, Button, CloseButton, Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input, Select,
  SlideFade, Text, Textarea,
  useColorModeValue
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import smoothscroll from "smoothscroll-polyfill";


class ProjectTypes {
  static WEB_DEVELOPMENT = "Web Development"
  static MOBILE_DEVELOPMENT = "Mobile Development"
  static CUSTOM_DEVELOPMENT = "Custom Development"
  static MVP_DEVELOPMENT = "MVP Development"
  static UI_UX_DESIGN = "UI/UX Design"
  static OTHER_INQUIRY = "Other Inquiry"
}

const projectTypeList = [
  ProjectTypes.WEB_DEVELOPMENT,
  ProjectTypes.MOBILE_DEVELOPMENT,
  ProjectTypes.CUSTOM_DEVELOPMENT,
  ProjectTypes.MVP_DEVELOPMENT,
  ProjectTypes.UI_UX_DESIGN,
  ProjectTypes.OTHER_INQUIRY
];

const budgetList = [
  "Under $300",
  "$300 - $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000+"
]

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required("Email is required. We won't spam you!"),
});


const ContactFormik = ({initialValues, setInitialValues, isModal}) => {
  const topRef = useRef(null);
  const [formMessage, setFormMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }, []);

  function handleError(error, actions){
    console.error(error);
    setFormMessage(
      'Sorry, there was some error trying to send your message :(. Please try again or email me directly at wainnyta@gmail.com'
    );
    setHasError(true);
    actions.setSubmitting(false);
    scrollToTop();
  }

  function scrollToTop(){
    topRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function submitFormEmailJS(values, actions){
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      ).then(
        ({status, text}) => {
          if(status === 200){
            setFormMessage(
              'Thank you for your message! I will get back to you within 24 hours.'
            );
            setHasError(false);
            actions.setSubmitting(false);
            actions.resetForm();
            scrollToTop();
          }else{
            handleError(text, actions);
          }
        },
        (err) => {
          handleError(err, actions);
        }
      )
    }catch(e){
      handleError(e, actions);
    }
  }

  return (
    <Container maxW="container.lg" px={{base: isModal? 0 : 4, md: 6}}>
      <div className={useColorModeValue("light-form", "dark-form")}>
        <div id="topRef" ref={topRef}></div>
        <Heading
          fontSize={{base: "28px", md: "40px", lg: "48px"}}
          mt={isModal? 2 : 10}
          as={"h1"}
        >Let's get in touch!
        </Heading>
        <Paragraph fontSize={{base: 'xl', lg: '2xl'}} lineHeight={1.6} mt={2} pb={{base: 0, md: 4}}>
          If you need help with anything, or maybe you just want to say hello, feel please to use the form
          below to get in touch with me anytime. I will get back to you within 24 hours!
        </Paragraph>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, actions) => {
            // setTimeout(() => {
            //   //alert(JSON.stringify(values, null, 2));
            //   console.log(values)
            //   actions.setSubmitting(false);
            // }, 400);
            //console.log('Get to submit');
            submitFormEmailJS(values, actions);
          }}
        >
          {(props) => (
            <SlideFade in={true} offsetY={80}>
              {formMessage.trim().length > 0 && (
                <Alert status={hasError ? 'error' : 'success'} mt={6}>
                  <AlertIcon/>
                  <AlertDescription pr={'20px'}>{formMessage}</AlertDescription>
                  <CloseButton
                    position='absolute'
                    right='8px'
                    top='8px'
                    onClick={() => setFormMessage("")}
                  />
                </Alert>
              )}
              <Flex
                direction={"column"}
                borderColor={useColorModeValue("gray.200", "gray.600")}
                borderWidth={1}
                p={{base: 1, md: 6}}
                py={{base: 4}}
                borderRadius={10}
                mt={6}
                bgColor={useColorModeValue("gray.100", "gray.700")}
              >
                <Form>
                  <Flex justify={"space-between"} w={"100%"} direction={{base: "column", md: "row"}}>
                    <Box w={"100%"} px={4}>
                      <Field name="name">
                        {({field, form}) => (
                          <FormControl
                            isRequired
                            isInvalid={form.errors.name && form.touched.name}
                          >
                            <FormLabel color={useColorModeValue("gray.800", "gray.400")}>Name</FormLabel>
                            <Input
                              {...field}
                              id="name"
                              bgColor={useColorModeValue("white", "gray.800")}
                              placeholder=''
                              _placeholder={{
                                color: useColorModeValue("gray.800", "gray.500")
                              }}
                              className={useColorModeValue("light-form", "dark-form")}
                            />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box w={"100%"} px={4} pt={{base: 4, md: 0}}>
                      <Field name="email">
                        {({field, form}) => (
                          <FormControl
                            isRequired
                            isInvalid={form.errors.email && form.touched.email}
                          >
                            <FormLabel htmlFor='email' color={useColorModeValue("gray.800", "gray.400")}>Email</FormLabel>
                            <Input
                              {...field}
                              type={"email"}
                              bgColor={useColorModeValue("white", "gray.800")}
                              id='email'
                              placeholder=''
                              _placeholder={{
                                color: useColorModeValue("gray.800", "gray.500")
                              }}
                              className={useColorModeValue("light-form", "dark-form")}
                            />
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Flex>

                  <Flex justify={"space-between"} w={"100%"} direction={{base: "column", md: "row"}}
                        pt={{base: 0, md: 8}}>
                    <Box w={"100%"} px={4} pt={{base: 4, md: 0}}>
                      <Field name="topic">
                        {({field, form}) => (
                          <FormControl name="topic" id="topic">
                            <FormLabel htmlFor='topic' color={useColorModeValue("gray.800", "gray.400")}>I want to talk
                              about</FormLabel>
                            <Select
                              {...field}
                              bgColor={useColorModeValue("white", "gray.800")}
                              id='topic'
                              placeholder=''
                              _placeholder={{
                                color: useColorModeValue("gray.800", "gray.500")
                              }}
                              onChange={form.handleChange}
                            >
                              {projectTypeList.map((projectType, index) => {
                                return <option value={projectType} key={index} id={"topic"}>{projectType}</option>;
                              })}
                            </Select>
                            <FormErrorMessage>{form.errors.topic}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box w={"100%"} px={4} pt={{base: 4, md: 0}}>
                      <Field name="budget">
                        {({field, form}) => (
                          <FormControl name={"budget"} id={"budget"}>
                            <FormLabel htmlFor='budget' color={useColorModeValue("gray.800", "gray.400")}>Budget (CAD)</FormLabel>
                            <Select
                              {...field}
                              bgColor={useColorModeValue("white", "gray.800")}
                              id='budget'
                              placeholder=''
                              _placeholder={{
                                color: useColorModeValue("gray.800", "gray.500")
                              }}
                              onChange={form.handleChange}
                            >
                              {budgetList.map((budget) => {
                                return <option id={"budget"} value={budget} key={budget}>{budget}</option>;
                              })}
                            </Select>
                            <FormErrorMessage>{form.errors.budget}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Flex>
                  <Flex justify={"space-between"} w={"100%"} direction={{base: "column", md: "row"}}
                        pt={{base: 0, md: 8}}>
                    <Box w={"100%"} px={4} pt={{base: 4, md: 0}}>
                      <Field name="message">
                        {({field, form}) => (
                          <FormControl>
                            <FormLabel htmlFor='message'
                                       color={useColorModeValue("gray.800", "gray.400")}>Message</FormLabel>
                            <Textarea
                              {...field}
                              bgColor={useColorModeValue("white", "gray.800")}
                              id='message'
                              placeholder=''
                              _placeholder={{
                                color: useColorModeValue("gray.800", "gray.500")
                              }}
                              rows={8} height="auto"
                            />
                            <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Flex>
                  <Flex p={6} pb={2} alignItems={"center"} justifyContent={{base: "center", md: "center"}}>
                    <Button
                      px={20}
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Flex>
                </Form>
              </Flex>
            </SlideFade>
          )}
        </Formik>
      </div>
    </Container>
  )
};

export {
  ContactFormik,
  ProjectTypes,
  projectTypeList,
};