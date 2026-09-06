# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3305<sub>(+15) | 3486<sub>(+22) | 3519<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3290<sub>(+57) | 3464<sub>(+16) | 3509<sub>(+14) |  |
| 11.0 | 2024-09-26 | 3233<sub>(+9) | 3448<sub>(-13) | 3495<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3224 | 3461 | 3499 |  |
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

Generated: 2026-09-06 06:25:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3224, 3233, 3290, 3305]
  line "STC (8.0+0.08s)" [3224, 3233, 3290, 3305]
  line "LTC (60.0+0.60s)" [3461, 3448, 3464, 3486]
  line "" [3499, 3495, 3509, 3519]
  line "VLTC (2m24s+1.12s)" [3499, 3495, 3509, 3519]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 12 | 1680 | 50% | 3521 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3486 | 12 | 1666 | 50% | 3483 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3305 | 12 | 1708 | 51% | 3299 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 21 | 544 | 50% | 3506 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 21 | 544 | 50% | 3465 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3290 | 22 | 552 | 49% | 3297 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 18 | 760 | 50% | 3494 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 18 | 768 | 49% | 3456 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3233 | 18 | 816 | 49% | 3237 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 31 | 252 | 52% | 3445 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 35 | 192 | 50% | 3459 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3224 | 31 | 272 | 48% | 3236 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |