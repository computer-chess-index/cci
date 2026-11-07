# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2481<sub>(+166) | 2854<sub>(+182) | 2913<sub>(+187) |  |
| 1.0.0 | 2026-10-14 | 2315<sub>(-23) | 2672<sub>(+83) | 2726<sub>(-4) |  |
| 0.15.2 | 2026-10-11 | 2338<sub>(+1497) | 2589<sub>(+new) | 2730<sub>(+31) |  |
| 0.15.1 | 2026-10-11 | 841 |  | 2699 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2638<sub>(+331) | 2942<sub>(+301) | 3002<sub>(+201) |  |
| 1.0.0 | 2026-10-14 | 2307<sub>(-73) | 2641<sub>(-109) | 2801<sub>(+90) |  |
| 0.15.2 | 2026-10-11 | 2380 | 2750 | 2711 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2380 | 2750 | 2711 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ElephantGambit+<version>&body=###%20Engine%20name%0AElephantGambit%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:37:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2338, 2315, 2481]
  line "E1: LTC (60.0+0.60s)" [2589, 2672, 2854]
  line "E1: VLTC (2m24s+1.12s)" [2730, 2726, 2913]
  line "P1: STC (8.0+0.08s)" [2380, 2307, 2638]
  line "P1: LTC (60.0+0.60s)" [2750, 2641, 2942]
  line "P1: VLTC (2m24s+1.12s)" [2711, 2801, 3002]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3002 | 40 | 188 | 49% | 3009 | 40% |
|  |  | E1 | 2913 | 33 | 300 | 54% | 2878 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2942 | 43 | 168 | 49% | 2948 | 37% |
|  |  | E1 | 2854 | 35 | 260 | 49% | 2867 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2638 | 46 | 160 | 50% | 2635 | 26% |
|  |  | E1 | 2481 | 39 | 214 | 50% | 2484 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2726 | 40 | 208 | 50% | 2726 | 25% |
|  |  | P1 | 2801 | 45 | 168 | 54% | 2778 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2672 | 40 | 216 | 50% | 2672 | 26% |
|  |  | P1 | 2641 | 49 | 142 | 49% | 2677 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2315 | 40 | 220 | 50% | 2319 | 23% |
|  |  | P1 | 2307 | 47 | 156 | 54% | 2273 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2711 | 64 | 82 | 53% | 2677 | 28% |
|  |  | E1 | 2730 | 50 | 132 | 49% | 2741 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2750 | 58 | 104 | 55% | 2688 | 28% |
|  |  | E1 | 2589 | 52 | 122 | 51% | 2569 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2380 | 65 | 90 | 55% | 2318 | 17% |
|  |  | E1 | 2338 | 49 | 156 | 55% | 2217 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2699 | 87 | 48 | 51% | 2676 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1774 | 331 | 16 | 100% | 714 | 0% |
|  |  | E1 | 841 | 341 | 6 | 100% | 269 | 0% |