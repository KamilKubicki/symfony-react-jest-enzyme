<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


class DefaultController extends AbstractController
{
    /**
     * @Route("/app/{reactRoute}", name="home", defaults={"reactRoute": null}, requirements={"reactRoute"=".+"})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }
}
