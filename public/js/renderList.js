function lesson(target)
{
    
    let name = target.name;
    let id = target.id;
    var domain_name = 'http://' + window.location.host;
    let url = new URL(domain_name + '/learning/lesson/multiple_choice?q=lesson&id=' + id + '&part=' + name);
    location.assign(url);
}



function lesson_matching(target)
{
    var domain_name = 'http://' + window.location.host;
    let name = target.name;
    let id = target.id;
    let url = new URL( domain_name + '/learning/lesson/matching?q=lesson&id=' + id + '&part=' + name);
    location.assign(url);
}
