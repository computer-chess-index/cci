# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2831<sub>(+336) | 3144<sub>(+212) | 3217<sub>(+196) |  |
| 1.6 | 2026-06-13 | 2495 | 2932 | 3021 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2882<sub>(+229) | 3119<sub>(+219) | 3206<sub>(+167) |  |
| 1.6 | 2026-06-13 | 2653 | 2900 | 3039 |  |
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

Generated: 2026-11-21 05:40:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2400 --> 3300
  line "E1: STC (8.0+0.08s)" [2495, 2831]
  line "E1: LTC (60.0+0.60s)" [2932, 3144]
  line "E1: VLTC (2m24s+1.12s)" [3021, 3217]
  line "P1: STC (8.0+0.08s)" [2653, 2882]
  line "P1: LTC (60.0+0.60s)" [2900, 3119]
  line "P1: VLTC (2m24s+1.12s)" [3039, 3206]
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
|  |  | P1 | 3206 | 31 | 286 | 50% | 3206 | 60% |
|  |  | E1 | 3217 | 25 | 456 | 47% | 3243 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3119 | 30 | 324 | 47% | 3144 | 48% |
|  |  | E1 | 3144 | 25 | 448 | 47% | 3168 | 49% |
|  |  | T1 | 3166 | 29 | 346 | 50% | 3164 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2882 | 31 | 324 | 48% | 2911 | 40% |
|  |  | E1 | 2831 | 25 | 496 | 46% | 2851 | 39% |
|  |  | T1 | 2897 | 29 | 370 | 49% | 2904 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3021 | 64 | 84 | 58% | 2857 | 33% |
|  |  | T1 | 3029 | 32 | 296 | 48% | 3044 | 40% |
|  |  | P1 | 3039 | 67 | 76 | 55% | 2912 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2942 | 34 | 264 | 46% | 2973 | 41% |
|  |  | P1 | 2900 | 66 | 80 | 56% | 2827 | 31% |
|  |  | E1 | 2932 | 65 | 78 | 46% | 2973 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 34 | 276 | 50% | 2641 | 33% |
|  |  | P1 | 2653 | 60 | 92 | 49% | 2681 | 36% |
|  |  | E1 | 2495 | 55 | 120 | 53% | 2458 | 22% |