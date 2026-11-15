# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2830<sub>(+323) | 3140<sub>(+228) | 3210<sub>(+232) |  |
| 1.6 | 2026-06-13 | 2507 | 2912 | 2978 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2859<sub>(+280) | 3096<sub>(+210) | 3191<sub>(+168) |  |
| 1.6 | 2026-06-13 | 2579 | 2886 | 3023 |  |
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

Generated: 2026-11-15 05:40:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "E1: STC (8.0+0.08s)" [2507, 2830]
  line "E1: LTC (60.0+0.60s)" [2912, 3140]
  line "E1: VLTC (2m24s+1.12s)" [2978, 3210]
  line "P1: STC (8.0+0.08s)" [2579, 2859]
  line "P1: LTC (60.0+0.60s)" [2886, 3096]
  line "P1: VLTC (2m24s+1.12s)" [3023, 3191]
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
|  |  | P1 | 3191 | 31 | 278 | 50% | 3193 | 60% |
|  |  | E1 | 3210 | 25 | 452 | 47% | 3237 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3166 | 29 | 346 | 50% | 3164 | 51% |
|  |  | P1 | 3096 | 30 | 312 | 47% | 3121 | 49% |
|  |  | E1 | 3140 | 26 | 416 | 47% | 3167 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2897 | 29 | 370 | 49% | 2904 | 40% |
|  |  | P1 | 2859 | 33 | 296 | 49% | 2871 | 40% |
|  |  | E1 | 2830 | 26 | 472 | 46% | 2850 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2978 | 78 | 60 | 58% | 2795 | 32% |
|  |  | T1 | 3029 | 32 | 296 | 48% | 3044 | 40% |
|  |  | P1 | 3023 | 103 | 36 | 65% | 2719 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2912 | 83 | 50 | 42% | 2994 | 32% |
|  |  | T1 | 2942 | 34 | 264 | 46% | 2973 | 41% |
|  |  | P1 | 2886 | 102 | 40 | 65% | 2700 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2507 | 73 | 72 | 57% | 2430 | 14% |
|  |  | T1 | 2635 | 34 | 276 | 50% | 2641 | 33% |
|  |  | P1 | 2579 | 89 | 48 | 43% | 2677 | 23% |