# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3004<sub>(+104) | 3337<sub>(+150) | 3429<sub>(+127) |  |
| 2.5.0 | 2026-10-05 | 2900<sub>(+355) | 3187<sub>(+267) | 3302<sub>(+239) |  |
| 2.4.0 | 2026-09-11 | 2545 | 2920 | 3063 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3167<sub>(+235) | 3363<sub>(+74) | 3476<sub>(+92) |  |
| 2.5.0 | 2026-10-05 | 2932<sub>(+291) | 3289<sub>(+268) | 3384<sub>(+299) |  |
| 2.4.0 | 2026-09-11 | 2641 | 3021 | 3085 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-24 04:42:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3500
  line "E1: STC (8.0+0.08s)" [2545, 2900, 3004]
  line "E1: LTC (60.0+0.60s)" [2920, 3187, 3337]
  line "E1: VLTC (2m24s+1.12s)" [3063, 3302, 3429]
  line "P1: STC (8.0+0.08s)" [2641, 2932, 3167]
  line "P1: LTC (60.0+0.60s)" [3021, 3289, 3363]
  line "P1: VLTC (2m24s+1.12s)" [3085, 3384, 3476]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3476 | 41 | 156 | 50% | 3476 | 63% |
|  |  | E1 | 3429 | 33 | 240 | 49% | 3437 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3363 | 46 | 128 | 54% | 3328 | 55% |
|  |  | E1 | 3337 | 34 | 244 | 51% | 3328 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3167 | 58 | 90 | 52% | 3143 | 42% |
|  |  | E1 | 3004 | 37 | 220 | 49% | 3012 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3384 | 36 | 206 | 53% | 3363 | 61% |
|  |  | E1 | 3302 | 30 | 312 | 54% | 3276 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3289 | 35 | 230 | 48% | 3302 | 52% |
|  |  | E1 | 3187 | 33 | 264 | 53% | 3160 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2900 | 32 | 312 | 56% | 2847 | 38% |
|  |  | P1 | 2932 | 45 | 150 | 51% | 2919 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3063 | 29 | 367 | 52% | 3052 | 41% |
|  |  | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3085 | 39 | 198 | 51% | 3077 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3021 | 42 | 168 | 53% | 2986 | 43% |
|  |  | E1 | 2920 | 32 | 310 | 47% | 2951 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2641 | 46 | 156 | 46% | 2677 | 31% |
|  |  | E1 | 2545 | 36 | 252 | 41% | 2638 | 33% |