# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2199<sub>(-19) | 2682<sub>(-23) | 2830<sub>(+11) |  |
| 1.5.0 | 2026-09-14 | 2218 | 2705 | 2819 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2276<sub>(+24) | 2673<sub>(0) | 2795<sub>(-16) |  |
| 1.5.0 | 2026-09-14 | 2252 | 2673 | 2811 |  |
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

Generated: 2026-11-25 05:37:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2218, 2199]
  line "E1: LTC (60.0+0.60s)" [2705, 2682]
  line "E1: VLTC (2m24s+1.12s)" [2819, 2830]
  line "P1: STC (8.0+0.08s)" [2252, 2276]
  line "P1: LTC (60.0+0.60s)" [2673, 2673]
  line "P1: VLTC (2m24s+1.12s)" [2811, 2795]
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
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2811 | 41 | 190 | 49% | 2816 | 31% |
|  |  | P1 | 2795 | 32 | 330 | 45% | 2816 | 32% |
|  |  | E1 | 2830 | 29 | 394 | 48% | 2855 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2673 | 36 | 264 | 49% | 2691 | 28% |
|  |  | E1 | 2682 | 32 | 316 | 52% | 2665 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2276 | 35 | 296 | 54% | 2240 | 20% |
|  |  | E1 | 2199 | 30 | 400 | 50% | 2206 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2811 | 38 | 212 | 47% | 2844 | 40% |
|  |  | E1 | 2819 | 30 | 370 | 46% | 2858 | 30% |
|  |  | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2673 | 35 | 272 | 47% | 2709 | 27% |
|  |  | E1 | 2705 | 32 | 328 | 46% | 2730 | 30% |
|  |  | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2218 | 32 | 356 | 42% | 2325 | 21% |
|  |  | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2252 | 37 | 270 | 45% | 2298 | 18% |