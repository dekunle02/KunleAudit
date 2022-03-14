# Generated by Django 4.0.3 on 2022-03-14 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('director', models.CharField(max_length=30)),
                ('phone_number', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('address_line_1', models.TextField(max_length=200)),
                ('address_line_2', models.TextField(blank=True, max_length=200, null=True)),
                ('address_line_3', models.TextField(blank=True, max_length=200, null=True)),
                ('logo_url', models.URLField(blank=True, null=True)),
                ('signature_url', models.URLField(blank=True, null=True)),
                ('bank_name', models.CharField(max_length=100)),
                ('bank_address', models.CharField(max_length=400)),
                ('bank_branch', models.CharField(max_length=100, null=True)),
                ('bank_swift_code', models.CharField(max_length=20, null=True)),
                ('bank_account_name', models.CharField(max_length=200)),
                ('bank_account_number', models.CharField(max_length=50)),
                ('paypal_email', models.CharField(max_length=20, null=True)),
            ],
        ),
    ]
