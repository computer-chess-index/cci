# Engine: RuthIron

Author: Emre Kalkan

Home: https://github.com/themreKalkan/RuthIron

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2346<sub>(+591) | 2716<sub>(+586) | 2838<sub>(+619) |  |
| 18.9.9 | 2026-01-16 | 1755 | 2130 | 2219 | Loses on time |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | 2026-02-28 | 2376<sub>(+591) | 2724<sub>(+565) | 2830<sub>(+650) |  |
| 18.9.9 | 2026-01-16 | 1785 | 2159 | 2180 | Loses on time |
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

Generated: 2026-11-19 05:43:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["18.9.9", "21.9.6.7"]
  y-axis "Elo Rating" 1700 --> 2900
  line "E1: STC (8.0+0.08s)" [1755, 2346]
  line "E1: LTC (60.0+0.60s)" [2130, 2716]
  line "E1: VLTC (2m24s+1.12s)" [2219, 2838]
  line "P1: STC (8.0+0.08s)" [1785, 2376]
  line "P1: LTC (60.0+0.60s)" [2159, 2724]
  line "P1: VLTC (2m24s+1.12s)" [2180, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 21.9.6.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2838 | 31 | 362 | 51% | 2815 | 33% |
|  |  | T1 | 2861 | 24 | 534 | 50% | 2861 | 41% |
|  |  | P1 | 2830 | 32 | 306 | 50% | 2847 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2754 | 24 | 564 | 50% | 2758 | 38% |
|  |  | P1 | 2724 | 35 | 268 | 52% | 2701 | 35% |
|  |  | E1 | 2716 | 29 | 416 | 50% | 2695 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2415 | 23 | 686 | 49% | 2433 | 28% |
|  |  | P1 | 2376 | 35 | 278 | 48% | 2407 | 33% |
|  |  | E1 | 2346 | 30 | 368 | 46% | 2392 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 18.9.9 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2180 | 69 | 80 | 49% | 2163 | 21% |
|  |  | E1 | 2219 | 61 | 98 | 48% | 2240 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2159 | 74 | 70 | 46% | 2201 | 24% |
|  |  | E1 | 2130 | 56 | 114 | 46% | 2191 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1785 | 62 | 98 | 47% | 1835 | 17% |
|  |  | E1 | 1755 | 56 | 116 | 41% | 1866 | 24% |