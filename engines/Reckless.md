# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3465<sub>(+37) | 3559<sub>(+14) | 3579<sub>(+19) |  |
| 0.8.0 | 2025-08-30 | 3428<sub>(+new) | 3545<sub>(+new) | 3560<sub>(+new) |  |
| 0.7.0 | 2024-08-23 |  |  |  |  |
| 0.6.0 | 2024-03-21 |  |  |  |  |
| 0.5.0 | 2024-02-04 |  |  |  |  |
| 0.4.0 | 2023-12-13 |  |  |  |  |
| 0.3.0 | 2023-11-05 |  |  |  |  |
| 0.2.0 | 2023-10-06 |  |  |  |  |
| 0.1.0 | 2023-05-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Reckless+<version>&body=###%20Engine%20name%0AReckless%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:28:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "STC (8.0+0.08s)" [3428, 3465]
  line "STC (8.0+0.08s)" [3428, 3465]
  line "LTC (60.0+0.60s)" [3545, 3559]
  line "VLTC (2m24s+1.12s)" [3560, 3579]
  line "VLTC (2m24s+1.12s)" [3560, 3579]
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
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "STC (8.0+0.08s)" [3428, 3465]
  line "STC (8.0+0.08s)" [3428, 3465]
  line "LTC (60.0+0.60s)" [3545, 3559]
  line "VLTC (2m24s+1.12s)" [3560, 3579]
  line "VLTC (2m24s+1.12s)" [3560, 3579]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 34 | 194 | 53% | 3559 | 93% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 28 | 288 | 51% | 3552 | 93% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3465 | 22 | 498 | 50% | 3464 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3560 | 27 | 306 | 54% | 3533 | 88% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 29 | 268 | 51% | 3532 | 87% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3428 | 26 | 378 | 51% | 3413 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |