# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3200<sub>(+195) | 3425<sub>(+113) | 3472<sub>(+90) |  |
| 1.9.1 | 2026-10-18 | 3005<sub>(+210) | 3312<sub>(+192) | 3382<sub>(+195) |  |
| 1.9.0 | 2026-10-16 | 2795 | 3120 | 3187 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3194<sub>(+152) | 3371<sub>(+73) | 3461<sub>(+120) |  |
| 1.9.1 | 2026-10-18 | 3042<sub>(+179) | 3298<sub>(+154) | 3341<sub>(+135) |  |
| 1.9.0 | 2026-10-16 | 2863 | 3144 | 3206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2863 | 3144 | 3206 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:43:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2795, 3005, 3200]
  line "E1: LTC (60.0+0.60s)" [3120, 3312, 3425]
  line "E1: VLTC (2m24s+1.12s)" [3187, 3382, 3472]
  line "P1: STC (8.0+0.08s)" [2863, 3042, 3194]
  line "P1: LTC (60.0+0.60s)" [3144, 3298, 3371]
  line "P1: VLTC (2m24s+1.12s)" [3206, 3341, 3461]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 30 | 270 | 54% | 3433 | 76% |
|  |  | E1 | 3472 | 32 | 246 | 51% | 3465 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3371 | 41 | 144 | 51% | 3367 | 76% |
|  |  | E1 | 3425 | 26 | 370 | 53% | 3405 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3200 | 30 | 310 | 53% | 3178 | 57% |
|  |  | P1 | 3194 | 32 | 266 | 52% | 3181 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3341 | 35 | 210 | 52% | 3329 | 62% |
|  |  | E1 | 3382 | 28 | 346 | 51% | 3372 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3298 | 33 | 248 | 49% | 3305 | 59% |
|  |  | E1 | 3312 | 30 | 310 | 53% | 3290 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3042 | 40 | 180 | 50% | 3043 | 45% |
|  |  | E1 | 3005 | 28 | 408 | 53% | 2978 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3187 | 34 | 292 | 55% | 3033 | 40% |
|  |  | P1 | 3206 | 42 | 194 | 60% | 2975 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3120 | 42 | 214 | 62% | 2831 | 34% |
|  |  | P1 | 3144 | 50 | 150 | 62% | 2830 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2795 | 42 | 220 | 61% | 2545 | 26% |
|  |  | P1 | 2863 | 47 | 176 | 58% | 2643 | 26% |