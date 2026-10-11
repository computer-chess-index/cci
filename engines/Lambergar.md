# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 2905 | 3187 | 3267 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3128 | 3434 | 3487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3060<sub>(+141) | 3285<sub>(+65) | 3367<sub>(+70) |  |
| 1.3 | 2025-09-19 | 2919 | 3220 | 3297 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lambergar+<version>&body=###%20Engine%20name%0ALambergar%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 11:16:14

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2919, 3060]
  line "T1: LTC (60.0+0.60s)" [3220, 3285]
  line "T1: VLTC (2m24s+1.12s)" [3297, 3367]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3367 | 29 | 298 | 50% | 3364 | 72% |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 44 | 136 | 57% | 3407 | 65% |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 39 | 180 | 58% | 3194 | 66% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3285 | 26 | 404 | 53% | 3262 | 61% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 44 | 144 | 54% | 3355 | 63% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3187 | 35 | 232 | 57% | 3077 | 59% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3060 | 27 | 392 | 50% | 3058 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3128 | 42 | 162 | 46% | 3158 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2905 | 36 | 220 | 45% | 2947 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3297 | 24 | 462 | 52% | 3283 | 66% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3220 | 26 | 398 | 51% | 3210 | 63% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2919 | 22 | 640 | 53% | 2877 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |