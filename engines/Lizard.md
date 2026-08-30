# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3303<sub>(+14) | 3484<sub>(+21) | 3518<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3289<sub>(+57) | 3463<sub>(+16) | 3507<sub>(+15) |  |
| 11.0 | 2024-09-26 | 3232<sub>(+10) | 3447<sub>(-12) | 3492<sub>(-6) |  |
| 10.5 | 2024-07-13 | 3222 | 3459 | 3498 |  |
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

Generated: 2026-08-30 13:10:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3222, 3232, 3289, 3303]
  line "STC (8.0+0.08s)" [3222, 3232, 3289, 3303]
  line "LTC (60.0+0.60s)" [3459, 3447, 3463, 3484]
  line "" [3498, 3492, 3507, 3518]
  line "VLTC (2m24s+1.12s)" [3498, 3492, 3507, 3518]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 12 | 1676 | 50% | 3519 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 12 | 1662 | 50% | 3482 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3303 | 12 | 1692 | 51% | 3298 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 21 | 544 | 50% | 3505 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 21 | 544 | 50% | 3464 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3289 | 22 | 552 | 49% | 3295 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 18 | 760 | 50% | 3492 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 18 | 768 | 49% | 3455 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3232 | 18 | 816 | 49% | 3236 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 31 | 252 | 52% | 3444 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 35 | 192 | 50% | 3457 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3222 | 31 | 272 | 48% | 3235 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |