# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2217<sub>(-55) | 2745<sub>(-18) | 2882<sub>(-4) |  |
| 1.5.0 | 2026-09-14 | 2272 | 2763 | 2886 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2334<sub>(+12) | 2761<sub>(+2) | 2936<sub>(+29) |  |
| 1.5.0 | 2026-09-14 | 2322 | 2759 | 2907 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2384<sub>(+19) | 2697<sub>(-31) | 2811<sub>(-21) |  |
| 1.5.0 | 2026-09-14 | 2365 | 2728 | 2832 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coco+<version>&body=###%20Engine%20name%0ACoco%0A%0A###%20Version%0A1.5.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-28 05:37:44

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2272, 2217]
  line "E1: LTC (60.0+0.60s)" [2763, 2745]
  line "E1: VLTC (2m24s+1.12s)" [2886, 2882]
  line "P1: STC (8.0+0.08s)" [2322, 2334]
  line "P1: LTC (60.0+0.60s)" [2759, 2761]
  line "P1: VLTC (2m24s+1.12s)" [2907, 2936]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2365, 2384]
  line "T1: LTC (60.0+0.60s)" [2728, 2697]
  line "T1: VLTC (2m24s+1.12s)" [2832, 2811]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2882 | 35 | 256 | 47% | 2904 | 33% |
|  |  | T1 | 2811 | 41 | 190 | 49% | 2816 | 31% |
|  |  | P1 | 2936 | 46 | 152 | 48% | 2897 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2761 | 45 | 164 | 50% | 2763 | 29% |
|  |  | E1 | 2745 | 40 | 200 | 53% | 2719 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2334 | 40 | 224 | 54% | 2294 | 20% |
|  |  | E1 | 2217 | 37 | 256 | 45% | 2264 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  |  | P1 | 2907 | 40 | 188 | 48% | 2925 | 40% |
|  |  | E1 | 2886 | 32 | 318 | 47% | 2911 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  |  | P1 | 2759 | 38 | 236 | 47% | 2796 | 28% |
|  |  | E1 | 2763 | 34 | 284 | 47% | 2792 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2322 | 41 | 224 | 44% | 2377 | 18% |
|  |  | E1 | 2272 | 35 | 308 | 43% | 2372 | 22% |