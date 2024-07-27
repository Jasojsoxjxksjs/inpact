from django.contrib import admin

from appointments.models import Appointment, Doctor

# Register your models here.
admin.site.register(Doctor)
admin.site.register(Appointment)