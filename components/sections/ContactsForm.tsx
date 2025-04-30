import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: 8,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",
  },
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);
      setResponseMessage(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box sx={{ width: "100%", py: { xs: 8, md: 12 }, backgroundColor: "var(--gray-100)" }}>
      {!responseMessage ? (
        <Container
          style={{
            marginBottom: "var(--footer-height)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            mb={4}
            fontSize={48}
            fontWeight={700}
          >
            Only CTA on the page
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              backgroundColor: "#fff",
              p: 4,
              maxWidth: "320px",
              borderRadius: 2,
              border: "1px solid var(--gray-300)",
            }}
          >
            <StyledTextField
              label="Name"
              placeholder="Value"
              fullWidth
              margin="normal"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <StyledTextField
              label="Email"
              placeholder="Value"
              fullWidth
              margin="normal"
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <StyledTextField
              label="Message"
              placeholder="Value"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 600,
                fontSize: 16,
                textTransform: "capitalize",
                backgroundColor: "var(--dark)",
                "&:hover": { backgroundColor: "var(--dark-hover)" },
                borderRadius: 2,
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      ) : (
          <Box
              sx={{
                p: { xs: 1, sm: 2, md: 2 },
                width: "100%",
                maxWidth: { xs: 350, sm: 400, md: 700 },
                margin: "0 auto",
                textAlign: "center",
                marginBottom: "var(--footer-height)",
              }}
          >
            <Typography
                variant="h5"
                fontWeight={600}
                fontSize={{ xs: 48, sm: 48, md: 72 }}
                color="var(--dark)"
            >
              {responseMessage}
            </Typography>
          </Box>

      )}
    </Box>
  );
};

export default ContactForm;
