# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3380<sub>(+109) | 3524<sub>(+61) | 3537<sub>(+36) |  |
| 6.1.1 | 2025-07-21 | 3271 | 3463 | 3501 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 08:24:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3271, 3380]
  line "STC (8.0+0.08s)" [3271, 3380]
  line "LTC (60.0+0.60s)" [3463, 3524]
  line "VLTC (2m24s+1.12s)" [3501, 3537]
  line "VLTC (2m24s+1.12s)" [3501, 3537]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 30 | 256 | 49% | 3545 | 89% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 31 | 238 | 50% | 3524 | 87% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3380 | 28 | 302 | 50% | 3380 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 23 | 420 | 52% | 3486 | 87% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 25 | 400 | 51% | 3452 | 81% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3271 | 23 | 514 | 51% | 3256 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |