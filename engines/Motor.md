# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3321<sub>(+12) | 3484<sub>(+21) | 3518<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3309<sub>(+new) | 3463<sub>(+new) | 3495<sub>(+new) |  |
| 0.7.0 | 2024-08-11 |  |  |  |  |
| 0.60 | 2024-06-30 | 3195<sub>(+new) | 3397<sub>(+new) | 3424<sub>(+new) |  |
| 0.5.0 | 2024-05-23 |  |  |  |  |
| 0.4.0 | 2024-04-18 |  |  |  |  |
| 0.3.0 | 2024-03-30 |  |  |  |  |
| 0.2.0 | 2024-03-09 |  |  |  |  |
| 0.1.0 | 2024-02-18 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Motor+<version>&body=###%20Engine%20name%0AMotor%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-17 06:26:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3195, 3309, 3321]
  line "STC (8.0+0.08s)" [3195, 3309, 3321]
  line "LTC (60.0+0.60s)" [3397, 3463, 3484]
  line "VLTC (2m24s+1.12s)" [3424, 3495, 3518]
  line "VLTC (2m24s+1.12s)" [3424, 3495, 3518]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3195, 3309, 3321]
  line "STC (8.0+0.08s)" [3195, 3309, 3321]
  line "LTC (60.0+0.60s)" [3397, 3463, 3484]
  line "VLTC (2m24s+1.12s)" [3424, 3495, 3518]
  line "VLTC (2m24s+1.12s)" [3424, 3495, 3518]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 22 | 474 | 49% | 3524 | 88% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 23 | 428 | 50% | 3480 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3321 | 21 | 556 | 50% | 3320 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 13 | 1468 | 51% | 3491 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 13 | 1484 | 50% | 3461 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3309 | 13 | 1460 | 49% | 3314 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 28 | 304 | 50% | 3425 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3397 | 28 | 316 | 52% | 3380 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3195 | 29 | 352 | 56% | 3059 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |