# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2880 | 3200 | 3276 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 3110 | 3344 | 3440 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2977<sub>(-12) | 3248<sub>(+1) | 3310<sub>(+24) |  |
| 4.48 | 2026-07-12 | 2989 | 3247 | 3286 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cheng4+<version>&body=###%20Engine%20name%0ACheng4%0A%0A###%20Version%0A4.49" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-13 04:37:05

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2989, 2977]
  line "T1: LTC (60.0+0.60s)" [3247, 3248]
  line "T1: VLTC (2m24s+1.12s)" [3286, 3310]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3276 | 32 | 262 | 50% | 3281 | 60% |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3310 | 34 | 228 | 51% | 3305 | 64% |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | 3440 | 38 | 180 | 48% | 3453 | 68% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3200 | 31 | 288 | 50% | 3202 | 54% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3248 | 32 | 264 | 50% | 3247 | 61% |
| 4.49 | LTC <sub>(60.0+0.60s)</sub> | 3344 | 38 | 196 | 47% | 3366 | 51% |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2977 | 34 | 250 | 49% | 2986 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 3110 | 39 | 202 | 51% | 3101 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.49 | STC <sub>(8.0+0.08s)</sub> | 2880 | 32 | 306 | 45% | 2925 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | 3286 | 25 | 432 | 53% | 3252 | 61% |
| 4.48 | LTC <sub>(60.0+0.60s)</sub> | 3247 | 29 | 320 | 52% | 3210 | 58% |
| 4.48 | STC <sub>(8.0+0.08s)</sub> | 2989 | 29 | 370 | 54% | 2942 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |