# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-11-25 | 2940<sub>(+739) | 3318<sub>(+638) | 3420<sub>(+596) |  |
| 1.5.1 | 2026-09-27 | 2201<sub>(-18) | 2680<sub>(-21) | 2824<sub>(+11) |  |
| 1.5.0 | 2026-09-14 | 2219 | 2701 | 2813 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-11-25 | 2982<sub>(+705) | 3382<sub>(+712) | 3299<sub>(+504) |  |
| 1.5.1 | 2026-09-27 | 2277<sub>(+22) | 2670<sub>(-3) | 2795<sub>(-17) |  |
| 1.5.0 | 2026-09-14 | 2255 | 2673 | 2812 |  |
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

Generated: 2026-11-26 05:37:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3500
  line "E1: STC (8.0+0.08s)" [2219, 2201, 2940]
  line "E1: LTC (60.0+0.60s)" [2701, 2680, 3318]
  line "E1: VLTC (2m24s+1.12s)" [2813, 2824, 3420]
  line "P1: STC (8.0+0.08s)" [2255, 2277, 2982]
  line "P1: LTC (60.0+0.60s)" [2673, 2670, 3382]
  line "P1: VLTC (2m24s+1.12s)" [2812, 2795, 3299]
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
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3299 | 80 | 44 | 66% | 3164 | 59% |
|  |  | E1 | 3420 | 40 | 170 | 51% | 3389 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3382 | 76 | 48 | 63% | 3249 | 63% |
|  |  | E1 | 3318 | 45 | 144 | 60% | 3202 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2940 | 44 | 168 | 58% | 2849 | 38% |
|  |  | P1 | 2982 | 49 | 132 | 61% | 2861 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2824 | 29 | 394 | 48% | 2850 | 34% |
|  |  | T1 | 2811 | 41 | 190 | 49% | 2816 | 31% |
|  |  | P1 | 2795 | 32 | 330 | 45% | 2816 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2670 | 35 | 272 | 49% | 2691 | 29% |
|  |  | E1 | 2680 | 32 | 316 | 52% | 2662 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2277 | 35 | 296 | 54% | 2242 | 20% |
|  |  | E1 | 2201 | 30 | 400 | 50% | 2207 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  |  | P1 | 2812 | 38 | 212 | 47% | 2846 | 40% |
|  |  | E1 | 2813 | 30 | 378 | 46% | 2853 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  |  | P1 | 2673 | 35 | 276 | 47% | 2709 | 27% |
|  |  | E1 | 2701 | 32 | 328 | 46% | 2726 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2255 | 37 | 274 | 46% | 2299 | 18% |
|  |  | E1 | 2219 | 32 | 356 | 42% | 2326 | 21% |