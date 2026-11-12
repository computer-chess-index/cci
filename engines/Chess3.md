# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2552<sub>(+284) | 2862<sub>(+563) | 2950<sub>(+371) |  |
| 3.0 | 2026-01-17 | 2268 | 2299 | 2579 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2638<sub>(+953) | 2921<sub>(+168) | 2986<sub>(+277) |  |
| 3.0 | 2026-01-17 | 1685 | 2753 | 2709 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2511<sub>(+35) | 2807<sub>(+45) | 2894<sub>(+86) |  |
| 3.0 | 2026-01-17 | 2476 | 2762 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:37:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 1600 --> 3000
  line "E1: STC (8.0+0.08s)" [2268, 2552]
  line "E1: LTC (60.0+0.60s)" [2299, 2862]
  line "E1: VLTC (2m24s+1.12s)" [2579, 2950]
  line "P1: STC (8.0+0.08s)" [1685, 2638]
  line "P1: LTC (60.0+0.60s)" [2753, 2921]
  line "P1: VLTC (2m24s+1.12s)" [2709, 2986]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "T1: STC (8.0+0.08s)" [2476, 2511]
  line "T1: LTC (60.0+0.60s)" [2762, 2807]
  line "T1: VLTC (2m24s+1.12s)" [2808, 2894]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  |  | P1 | 2986 | 33 | 300 | 49% | 3000 | 36% |
|  |  | E1 | 2950 | 27 | 436 | 49% | 2955 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  |  | P1 | 2921 | 36 | 278 | 58% | 2708 | 28% |
|  |  | E1 | 2862 | 29 | 408 | 51% | 2830 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
|  |  | P1 | 2638 | 38 | 240 | 50% | 2634 | 34% |
|  |  | E1 | 2552 | 31 | 342 | 48% | 2569 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2709 | 208 | 8 | 50% | 2709 | 0% |
|  |  | E1 | 2579 | 199 | 8 | 56% | 2530 | 13% |
|  |  | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2753 | 211 | 4 | 25% | 2873 | 50% |
|  |  | E1 | 2299 | 159 | 16 | 53% | 2253 | 19% |
|  |  | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1685 | 229 | 4 | 25% | 1835 | 50% |
|  |  | E1 | 2268 | 174 | 16 | 47% | 2298 | 6% |
|  |  | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |