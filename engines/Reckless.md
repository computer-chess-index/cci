# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3530<sub>(+40) | 3617<sub>(+10) | 3645<sub>(+24) |  |
| 0.8.0 | 2025-08-30 | 3490<sub>(+new) | 3607<sub>(+new) | 3621<sub>(+new) |  |
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

Generated: 2026-05-13 06:28:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "STC (8.0+0.08s)" [3490, 3530]
  line "STC (8.0+0.08s)" [3490, 3530]
  line "LTC (60.0+0.60s)" [3607, 3617]
  line "VLTC (2m24s+1.12s)" [3621, 3645]
  line "VLTC (2m24s+1.12s)" [3621, 3645]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3645 | 37 | 162 | 54% | 3621 | 91% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3617 | 30 | 240 | 51% | 3613 | 93% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3530 | 24 | 430 | 51% | 3522 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3621 | 27 | 306 | 54% | 3594 | 88% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3607 | 29 | 268 | 51% | 3594 | 87% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3490 | 26 | 378 | 51% | 3475 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |