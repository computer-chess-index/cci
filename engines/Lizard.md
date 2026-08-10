# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3293<sub>(+15) | 3474<sub>(+22) | 3507<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3278<sub>(+56) | 3452<sub>(+16) | 3497<sub>(+14) |  |
| 11.0 | 2024-09-26 | 3222<sub>(+9) | 3436<sub>(-13) | 3483<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3213 | 3449 | 3487 |  |
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

Generated: 2026-08-10 07:51:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3213, 3222, 3278, 3293]
  line "STC (8.0+0.08s)" [3213, 3222, 3278, 3293]
  line "LTC (60.0+0.60s)" [3449, 3436, 3452, 3474]
  line "VLTC (2m24s+1.12s)" [3487, 3483, 3497, 3507]
  line "VLTC (2m24s+1.12s)" [3487, 3483, 3497, 3507]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 12 | 1652 | 50% | 3509 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 12 | 1622 | 50% | 3471 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3293 | 13 | 1672 | 51% | 3287 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3497 | 21 | 544 | 50% | 3494 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3452 | 21 | 544 | 50% | 3453 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3278 | 22 | 552 | 49% | 3286 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 18 | 760 | 50% | 3482 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 18 | 768 | 49% | 3444 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3222 | 18 | 816 | 49% | 3227 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 31 | 252 | 52% | 3433 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 35 | 192 | 50% | 3447 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3213 | 31 | 272 | 48% | 3224 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |