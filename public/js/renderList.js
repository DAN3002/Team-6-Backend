function lesson(target)
{
    let name = target.name;
    let id = target.id;
    let url = new URL('/learning/lesson/multiple_choice?q=lesson&id=' + id + '&part=' + name);

    location.assign(url);  
}



function lesson_matching(target)
{
    let name = target.name;
    let id = target.id;
    let url = new URL('/learning/lesson/matching?q=lesson&id=' + id + '&part=' + name);

    location.assign(url);  
}
