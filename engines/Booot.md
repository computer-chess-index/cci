# Engine: Booot

Author: Alex Morozov

Home: https://github.com/booot76/Booot-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3205<sub>(+39) | 3464<sub>(+119) | 3583<sub>(+112) |  |
| 7.3 | 2024-01-28 | 3166 | 3345 | 3471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3170<sub>(+30) | 3433<sub>(+49) | 3482<sub>(+196) |  |
| 7.3 | 2024-01-28 | 3140 | 3384 | 3286 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.4 | 2025-02-25 | 3241 | 3456 | 3499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Booot+<version>&body=###%20Engine%20name%0ABooot%0A%0A###%20Version%0A7.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:36:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.3", "7.4"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3166, 3205]
  line "E1: LTC (60.0+0.60s)" [3345, 3464]
  line "E1: VLTC (2m24s+1.12s)" [3471, 3583]
  line "P1: STC (8.0+0.08s)" [3140, 3170]
  line "P1: LTC (60.0+0.60s)" [3384, 3433]
  line "P1: VLTC (2m24s+1.12s)" [3286, 3482]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3499 | 23 | 460 | 51% | 3486 | 80% |
|  |  | P1 | 3482 | 38 | 174 | 54% | 3410 | 78% |
|  |  | E1 | 3583 | 32 | 254 | 53% | 3532 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 21 | 572 | 50% | 3445 | 76% |
|  |  | P1 | 3433 | 39 | 160 | 52% | 3382 | 77% |
|  |  | E1 | 3464 | 28 | 334 | 55% | 3386 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3241 | 19 | 750 | 50% | 3237 | 58% |
|  |  | P1 | 3170 | 33 | 248 | 48% | 3182 | 61% |
|  |  | E1 | 3205 | 26 | 370 | 47% | 3222 | 66% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3286 | 111 | 24 | 73% | 3069 | 54% |
|  |  | E1 | 3471 | 93 | 38 | 68% | 3214 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3384 | 145 | 16 | 75% | 3105 | 50% |
|  |  | E1 | 3345 | 81 | 42 | 52% | 3306 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3140 | 103 | 32 | 56% | 3046 | 31% |
|  |  | E1 | 3166 | 72 | 58 | 49% | 3171 | 47% |