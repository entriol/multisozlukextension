'use strict';

$('.navbar-brand small').first().html(chrome.runtime.getManifest().version);

function saveWebToken() {
    const webToken = document.getElementById('webToken').value;
    chrome.storage.sync.set({
        jwt: webToken
    }, function() {
        const status = document.querySelector('#webTokenOption button');
        status.textContent = 'Kaydedildi!';
        setTimeout(function() {
            status.textContent = 'Kaydet';
        }, 750);
    });
}

document.querySelector('#webTokenOption input').addEventListener('click',function () {
    this.select();
});

function saveRightClickMenu() {
    const rightClickMenu = $('#rightClickMenu').text() == 'Aktif' ? false : true;

    chrome.storage.sync.set({
        rightClickMenu: rightClickMenu
    }, function() {
        if ($('#rightClickMenu').text() != 'Aktif') {
            $('#rightClickMenu').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#rightClickMenu').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }
    });
}

function saveDifficultyIndex() {
    const difficultyIndex = $('#difficultyIndex').text() == 'Aktif' ? false : true;

    chrome.storage.sync.set({
        difficultyIndex: difficultyIndex
    }, function() {
        if ($('#difficultyIndex').text() != 'Aktif') {
            $('#difficultyIndex').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#difficultyIndex').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }
    });
}

function saveAutoSelect() {
    const autoSelect = $('#autoSelect').text() == 'Aktif' ? false : true;

    chrome.storage.sync.set({
        autoSelect: autoSelect
    }, function() {
        if ($('#autoSelect').text() != 'Aktif') {
            $('#autoSelect').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#autoSelect').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }
    });
}

function saveGermanFirst() {
    const germanFirst = $('#germanFirst').text() == 'Aktif' ? false : true;

    chrome.storage.sync.set({
        germanFirst: germanFirst
    }, function() {
        if ($('#germanFirst').text() != 'Aktif') {
            $('#germanFirst').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#germanFirst').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }
    });
}

function restore_options() {
    chrome.storage.sync.get({
        jwt: '',
        rightClickMenu: false,
        difficultyIndex: false,
        autoSelect: true,
        germanFirst: false
    }, function(items) {
        document.getElementById('webToken').value = items.jwt;
        
        if (items.rightClickMenu) {
            $('#rightClickMenu').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#rightClickMenu').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }

        if (items.difficultyIndex) {
            $('#difficultyIndex').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#difficultyIndex').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }

        if (items.autoSelect) {
            $('#autoSelect').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#autoSelect').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }

        if (items.germanFirst) {
            $('#germanFirst').addClass('btn-primary').removeClass('btn-outline-primary').text('Aktif');
        } else {
            $('#germanFirst').removeClass('btn-primary').addClass('btn-outline-primary').text('Aktifleştir');
        }

    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#webTokenOption button').addEventListener('click',
    saveWebToken);
document.querySelector('#rightClickMenu').addEventListener('click',
    saveRightClickMenu);
document.querySelector('#difficultyIndex').addEventListener('click',
    saveDifficultyIndex);
document.querySelector('#autoSelect').addEventListener('click',
    saveAutoSelect);
document.querySelector('#germanFirst').addEventListener('click',
    saveGermanFirst);