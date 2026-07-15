# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3322<sub>(+9) | 3487<sub>(+20) | 3522<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3313<sub>(+new) | 3467<sub>(+new) | 3499<sub>(+new) |  |
| 0.7.0 | 2024-08-11 |  |  |  |  |
| 0.60 | 2024-06-30 | 3200<sub>(+new) | 3401<sub>(+new) | 3428<sub>(+new) |  |
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

Generated: 2026-07-15 06:27:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3200, 3313, 3322]
  line "STC (8.0+0.08s)" [3200, 3313, 3322]
  line "LTC (60.0+0.60s)" [3401, 3467, 3487]
  line "VLTC (2m24s+1.12s)" [3428, 3499, 3522]
  line "VLTC (2m24s+1.12s)" [3428, 3499, 3522]
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
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3200, 3313, 3322]
  line "STC (8.0+0.08s)" [3200, 3313, 3322]
  line "LTC (60.0+0.60s)" [3401, 3467, 3487]
  line "VLTC (2m24s+1.12s)" [3428, 3499, 3522]
  line "VLTC (2m24s+1.12s)" [3428, 3499, 3522]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 22 | 474 | 49% | 3526 | 88% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 23 | 428 | 50% | 3484 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3322 | 21 | 544 | 50% | 3324 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 13 | 1468 | 51% | 3495 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3467 | 13 | 1484 | 50% | 3465 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3313 | 13 | 1460 | 49% | 3317 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 28 | 304 | 50% | 3429 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3401 | 28 | 316 | 52% | 3384 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3200 | 29 | 352 | 56% | 3063 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |