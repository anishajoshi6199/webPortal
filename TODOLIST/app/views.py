from tkinter.messagebox import RETRY
from django.shortcuts import render
from app.models import Todo
from django.http import HttpResponseRedirect

def submit(request):
        task = request.POST.get('task')
        date = request.POST.get('date')

        todo = Todo(task=task, date=date)
        todo.save()
        return HttpResponseRedirect("/")

def delete(request, todo_id):
    Todo.objects.get(id=todo_id).delete()
    return HttpResponseRedirect("/")

def edit(request, todo_id):
    
    return HttpResponseRedirect("/")



    
def index(request):
    todo_items = Todo.objects.all().order_by("-date")
    context = {"todo_items" : todo_items}
    return render(request, 'tasks.html', context)
