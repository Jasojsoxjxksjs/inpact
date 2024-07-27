from django.shortcuts import render, redirect
from .models import Appointment, Doctor
from .forms import AppointmentForm, DoctorForm


# Create your views here.
def appointment_list(request):
    appointments = Appointment.objects.all()
    return render(request, 'appointments/appointment_list.html', {'appointments': appointments})

def appointment_create(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('appointment_list')
    else:
        form = AppointmentForm()
    return render(request, 'appointments/appointment_form.html', {'form': form})

def doctor_profile(request, pk):
    doctor = Doctor.objects.get(pk=pk)
    return render(request, 'appointments/doctor_profile.html', {'doctor': doctor})
