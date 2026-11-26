# Engine: Onechess

Author: Julien Orlandini

Home: https://github.com/ovnice-dev/onechess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.1 | 2026-11-25 | 3001<sub>(+548) | 3314<sub>(+437) | 3471<sub>(+446) |  |
| 1.2 | 2026-11-22 | 2453<sub>(-28) | 2877<sub>(-55) | 3025<sub>(+33) |  |
| 1.0 | 2026-11-15 | 2481 | 2932 | 2992 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.1 | 2026-11-25 | 3105<sub>(+541) | 3409<sub>(+455) | 3434<sub>(+423) |  |
| 1.2 | 2026-11-22 | 2564<sub>(+60) | 2954<sub>(+43) | 3011<sub>(+5) |  |
| 1.0 | 2026-11-15 | 2504 | 2911 | 3006 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-11-15 | 2504 | 2911 | 3006 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onechess+<version>&body=###%20Engine%20name%0AOnechess%0A%0A###%20Version%0A1.2.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:41:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.2.1"]
  y-axis "Elo Rating" 2400 --> 3500
  line "E1: STC (8.0+0.08s)" [2481, 2453, 3001]
  line "E1: LTC (60.0+0.60s)" [2932, 2877, 3314]
  line "E1: VLTC (2m24s+1.12s)" [2992, 3025, 3471]
  line "P1: STC (8.0+0.08s)" [2504, 2564, 3105]
  line "P1: LTC (60.0+0.60s)" [2911, 2954, 3409]
  line "P1: VLTC (2m24s+1.12s)" [3006, 3011, 3434]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3471 | 43 | 160 | 55% | 3414 | 46% |
|  |  | P1 | 3434 | 62 | 72 | 58% | 3366 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3314 | 47 | 148 | 60% | 3213 | 34% |
|  |  | P1 | 3409 | 81 | 52 | 58% | 3320 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3105 | 65 | 104 | 72% | 2796 | 23% |
|  |  | E1 | 3001 | 43 | 244 | 66% | 2786 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3011 | 49 | 130 | 47% | 3032 | 38% |
|  |  | E1 | 3025 | 43 | 168 | 54% | 2992 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2954 | 74 | 60 | 49% | 2963 | 25% |
|  |  | E1 | 2877 | 25 | 520 | 57% | 2809 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2564 | 55 | 116 | 51% | 2553 | 20% |
|  |  | E1 | 2453 | 32 | 350 | 56% | 2394 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2992 | 32 | 312 | 46% | 3021 | 32% |
|  |  | P1 | 3006 | 45 | 154 | 50% | 2998 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2932 | 36 | 260 | 51% | 2911 | 28% |
|  |  | P1 | 2911 | 40 | 212 | 49% | 2900 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2481 | 37 | 260 | 50% | 2489 | 19% |
|  |  | P1 | 2504 | 40 | 216 | 48% | 2525 | 21% |