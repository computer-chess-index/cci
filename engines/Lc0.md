# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2403<sub>(+24) | 3004<sub>(+8) | 3174<sub>(-57) |  |
| 0.29.0 | 2022-12-13 | 2379 | 2996 | 3231 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 04:36:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2379, 2403]
  line "STC (8.0+0.08s)" [2379, 2403]
  line "LTC (60.0+0.60s)" [2996, 3004]
  line "" [3231, 3174]
  line "VLTC (2m24s+1.12s)" [3231, 3174]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3174 | 23 | 536 | 49% | 3185 | 54% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 23 | 546 | 49% | 3015 | 45% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2403 | 21 | 786 | 49% | 2410 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3231 | 28 | 356 | 50% | 3231 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 2996 | 30 | 328 | 48% | 3011 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2379 | 32 | 400 | 42% | 2492 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |