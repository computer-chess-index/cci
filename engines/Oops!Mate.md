# Engine: Oops!Mate

Author: Swoyam Pokharel

Home: https://github.com/PS-Wizard/OopsMate

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-01-30 | 1278<sub>(+137) | 1459<sub>(+93) | 1499<sub>(+83) |  |
| 0.0.4 | 2025-11-23 | 1141<sub>(+new) | 1366<sub>(+new) | 1416<sub>(+new) |  |
| 0.0.3 | 2025-11-13 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Oops!Mate+<version>&body=###%20Engine%20name%0AOops!Mate%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:40:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.4", "2.0"]
  y-axis "Elo Rating" 1100 --> 1500
  line "" [1141, 1278]
  line "STC (8.0+0.08s)" [1141, 1278]
  line "LTC (60.0+0.60s)" [1366, 1459]
  line "" [1416, 1499]
  line "VLTC (2m24s+1.12s)" [1416, 1499]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1499 | 27 | 468 | 54% | 1459 | 30% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1459 | 27 | 508 | 51% | 1445 | 28% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1278 | 26 | 576 | 56% | 1170 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1416 | 43 | 190 | 42% | 1561 | 34% |
| 0.0.4 | LTC <sub>(60.0+0.60s)</sub> | 1366 | 41 | 200 | 45% | 1455 | 32% |
| 0.0.4 | STC <sub>(8.0+0.08s)</sub> | 1141 | 43 | 198 | 43% | 1239 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |