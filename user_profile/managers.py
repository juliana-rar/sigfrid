from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not username:
            raise ValueError("The user must have a username")
        if not email:
            raise ValueError("The user must have an email address")
        email = self.normalize_email(email)
        user = self.model(
            username=username,
            email=email,
            **extra_fields
        )
        user.set_password(password)
        user.save
        # user.save(using=self._db)
        return user
    


    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        


        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(username, email, password, **extra_fields)





# from django.contrib.auth.base_user import BaseUserManager

# class CustomerUserManager(BaseUserManager):
#     def create_user(self, username, email, password, **extra_fields):
#         if not username:
#             raise ValueError("The user must be set")
#         if not email:
#             raise ValueError("The email must be set")
#         if not username:
#             raise ValueError("The password must be set")
#         email = self.normalize_email(email)
#         user = self.model(
#             username,
#             email,
#             password,
#             **extra_fields
#         )
#         user.set_password(password)
#         user.save()
#     def create_superuser(self, username, email, password, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         extra_fields.setdefault('is_active', True)

#         if extra_fields.get('is_staff' != True):
#             raise ValueError("The superuser must have is_staff=True")
        
#         if extra_fields.get('is_superuser' != True):
#             raise ValueError("The superuser must have is_superuser=True")
#         return self.create_user(
#             username,
#             email,
#             password,
#             **extra_fields
#         )