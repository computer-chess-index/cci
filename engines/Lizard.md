# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3298<sub>(+15) | 3479<sub>(+22) | 3513<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3283<sub>(+55) | 3457<sub>(+16) | 3502<sub>(+14) |  |
| 11.0 | 2024-09-26 | 3228<sub>(+10) | 3441<sub>(-14) | 3488<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3218 | 3455 | 3492 |  |
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

Generated: 2026-08-21 06:27:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3218, 3228, 3283, 3298]
  line "STC (8.0+0.08s)" [3218, 3228, 3283, 3298]
  line "LTC (60.0+0.60s)" [3455, 3441, 3457, 3479]
  line "VLTC (2m24s+1.12s)" [3492, 3488, 3502, 3513]
  line "VLTC (2m24s+1.12s)" [3492, 3488, 3502, 3513]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 12 | 1656 | 50% | 3514 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 12 | 1626 | 50% | 3476 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3298 | 13 | 1680 | 51% | 3293 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 21 | 544 | 50% | 3499 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 21 | 544 | 50% | 3459 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3283 | 22 | 552 | 49% | 3291 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 18 | 760 | 50% | 3487 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 18 | 768 | 49% | 3449 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3228 | 18 | 816 | 49% | 3231 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 31 | 252 | 52% | 3438 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 35 | 192 | 50% | 3452 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3218 | 31 | 272 | 48% | 3229 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |