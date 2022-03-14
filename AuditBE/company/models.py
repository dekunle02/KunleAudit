from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=30, null=False)
    director = models.CharField(max_length=30, null=False)
    phone_number = models.CharField(max_length=20, null=False)
    email = models.EmailField(null=False)
    address_line_1 = models.TextField(max_length=200, null=False)
    address_line_2 = models.TextField(max_length=200, null=True, blank=True)
    address_line_3 = models.TextField(max_length=200, null=True, blank=True)
    logo_url = models.URLField(null=True, blank=True)
    signature_url = models.URLField(null=True, blank=True)
    bank_name = models.CharField(max_length=100, blank=False)
    bank_address = models.CharField(max_length=400, null=False)
    bank_branch = models.CharField(max_length=100, null=True)
    bank_swift_code = models.CharField(max_length=20, null=True)
    bank_account_name = models.CharField(max_length=200, null=False)
    bank_account_number = models.CharField(max_length=50, null=False)
    paypal_email = models.CharField(max_length=20, null=True)
