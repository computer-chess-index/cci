# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3297<sub>(+16) | 3476<sub>(+21) | 3510<sub>(+9) |  |
| 11.1.5 | 2024-12-30 | 3281<sub>(+56) | 3455<sub>(+17) | 3501<sub>(+15) |  |
| 11.0 | 2024-09-26 | 3225<sub>(+9) | 3438<sub>(-14) | 3486<sub>(-5) |  |
| 10.5 | 2024-07-13 | 3216 | 3452 | 3491 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:26:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3216, 3225, 3281, 3297]
  line "STC (8.0+0.08s)" [3216, 3225, 3281, 3297]
  line "LTC (60.0+0.60s)" [3452, 3438, 3455, 3476]
  line "VLTC (2m24s+1.12s)" [3491, 3486, 3501, 3510]
  line "VLTC (2m24s+1.12s)" [3491, 3486, 3501, 3510]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 12 | 1656 | 50% | 3513 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 12 | 1626 | 50% | 3475 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3297 | 13 | 1680 | 51% | 3290 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 21 | 544 | 50% | 3497 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 21 | 544 | 50% | 3456 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3281 | 22 | 552 | 49% | 3289 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3486 | 18 | 760 | 50% | 3484 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 18 | 768 | 49% | 3447 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3225 | 18 | 816 | 49% | 3229 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 31 | 252 | 52% | 3436 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 35 | 192 | 50% | 3451 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3216 | 31 | 272 | 48% | 3228 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |