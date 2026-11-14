# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2830<sub>(+400) | 3140<sub>(+161) | 3209<sub>(+180) |  |
| 1.6 | 2026-06-13 | 2430 | 2979 | 3029 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2862<sub>(+236) | 3112<sub>(+192) | 3202<sub>(+151) |  |
| 1.6 | 2026-06-13 | 2626 | 2920 | 3051 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2897<sub>(+262) | 3166<sub>(+224) | 3233<sub>(+204) |  |
| 1.6 | 2026-06-13 | 2635 | 2942 | 3029 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:40:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2400 --> 3300
  line "E1: STC (8.0+0.08s)" [2430, 2830]
  line "E1: LTC (60.0+0.60s)" [2979, 3140]
  line "E1: VLTC (2m24s+1.12s)" [3029, 3209]
  line "P1: STC (8.0+0.08s)" [2626, 2862]
  line "P1: LTC (60.0+0.60s)" [2920, 3112]
  line "P1: VLTC (2m24s+1.12s)" [3051, 3202]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "T1: STC (8.0+0.08s)" [2635, 2897]
  line "T1: LTC (60.0+0.60s)" [2942, 3166]
  line "T1: VLTC (2m24s+1.12s)" [3029, 3233]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3233 | 28 | 342 | 50% | 3235 | 58% |
|  |  | P1 | 3202 | 31 | 278 | 50% | 3202 | 60% |
|  |  | E1 | 3209 | 25 | 444 | 47% | 3236 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3166 | 29 | 346 | 50% | 3164 | 51% |
|  |  | P1 | 3112 | 31 | 304 | 48% | 3128 | 50% |
|  |  | E1 | 3140 | 26 | 412 | 47% | 3163 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2897 | 29 | 370 | 49% | 2904 | 40% |
|  |  | P1 | 2862 | 33 | 292 | 50% | 2873 | 40% |
|  |  | E1 | 2830 | 26 | 472 | 46% | 2850 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3029 | 32 | 296 | 48% | 3044 | 40% |
|  |  | P1 | 3051 | 124 | 28 | 73% | 2626 | 25% |
|  |  | E1 | 3029 | 96 | 44 | 66% | 2716 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2920 | 119 | 32 | 72% | 2653 | 25% |
|  |  | E1 | 2979 | 98 | 36 | 47% | 3012 | 33% |
|  |  | T1 | 2942 | 34 | 264 | 46% | 2973 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2626 | 130 | 28 | 46% | 2705 | 7% |
|  |  | E1 | 2430 | 88 | 48 | 48% | 2446 | 17% |
|  |  | T1 | 2635 | 34 | 276 | 50% | 2641 | 33% |