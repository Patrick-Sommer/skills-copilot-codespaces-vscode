function skillsMembers() {
    var members = document.querySelectorAll('.members');
    var skills = document.querySelectorAll('.skills');
    var skillsMembers = document.querySelectorAll('.skills-members');
    var skillsMembersHeight = 0;
    var skillsHeight = 0;
    var membersHeight = 0;
    var maxHeight = 0;
    var i = 0;

    for (i = 0; i < members.length; i++) {
        membersHeight = members[i].offsetHeight;
        skillsHeight = skills[i].offsetHeight;
        skillsMembersHeight = skillsMembers[i].offsetHeight;

        maxHeight = Math.max(membersHeight, skillsHeight, skillsMembersHeight);

        members[i].style.height = maxHeight + 'px';
        skills[i].style.height = maxHeight + 'px';
        skillsMembers[i].style.height = maxHeight + 'px';
    }
}