<?php

namespace Atwix\Bundle\HotkeysBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('AtwixHotkeysBundle:Default:index.html.twig', array('name' => $name));
    }
}
