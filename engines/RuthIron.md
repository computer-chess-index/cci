# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2361<sub>(+595) | 2715<sub>(+617) | 2830<sub>(+612) |  |
| 18.9.9 | 2026-01-16 | 1766 | 2098 | 2218 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2390<sub>(+605) | 2735<sub>(+576) | 2853<sub>(+650) |  |
| 18.9.9 | 2026-01-16 | 1785 | 2159 | 2203 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2415 | 2754 | 2861 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RuthIron+<version>&body=###%20Engine%20name%0ARuthIron%0A%0A###%20Version%0A21.9.6.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:42:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1766, 2361]
  line "E1: LTC (60.0+0.60s)" [2098, 2715]
  line "E1: VLTC (2m24s+1.12s)" [2218, 2830]
  line "P1: STC (8.0+0.08s)" [1785, 2390]
  line "P1: LTC (60.0+0.60s)" [2159, 2735]
  line "P1: VLTC (2m24s+1.12s)" [2203, 2853]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2830 | 29 | 390 | 50% | 2815 | 33% |
|  |  | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2853 | 31 | 324 | 49% | 2877 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2715 | 27 | 468 | 49% | 2704 | 30% |
|  |  | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2735 | 34 | 296 | 50% | 2730 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2361 | 29 | 390 | 47% | 2394 | 31% |
|  |  | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
|  |  | P1 | 2390 | 32 | 314 | 47% | 2427 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2203 | 66 | 88 | 49% | 2188 | 22% |
|  |  | E1 | 2218 | 59 | 106 | 48% | 2241 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2159 | 58 | 114 | 46% | 2210 | 21% |
|  |  | E1 | 2098 | 47 | 158 | 45% | 2168 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1785 | 53 | 134 | 47% | 1837 | 19% |
|  |  | E1 | 1766 | 53 | 124 | 42% | 1863 | 27% |