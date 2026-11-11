# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2476<sub>(+161) | 2842<sub>(+174) | 2911<sub>(+188) |  |
| 1.0.0 | 2026-10-14 | 2315<sub>(-22) | 2668<sub>(+81) | 2723<sub>(-4) |  |
| 0.15.2 | 2026-10-11 | 2337<sub>(+1493) | 2587<sub>(+new) | 2727<sub>(+31) |  |
| 0.15.1 | 2026-10-11 | 844 |  | 2696 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2592<sub>(+332) | 2889<sub>(+296) | 2959<sub>(+204) |  |
| 1.0.0 | 2026-10-14 | 2260<sub>(-74) | 2593<sub>(-111) | 2755<sub>(+91) |  |
| 0.15.2 | 2026-10-11 | 2334 | 2704 | 2664 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2334 | 2704 | 2664 |  |
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

Generated: 2026-11-11 05:37:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2337, 2315, 2476]
  line "E1: LTC (60.0+0.60s)" [2587, 2668, 2842]
  line "E1: VLTC (2m24s+1.12s)" [2727, 2723, 2911]
  line "P1: STC (8.0+0.08s)" [2334, 2260, 2592]
  line "P1: LTC (60.0+0.60s)" [2704, 2593, 2889]
  line "P1: VLTC (2m24s+1.12s)" [2664, 2755, 2959]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2959 | 39 | 204 | 50% | 2961 | 41% |
|  |  | E1 | 2911 | 32 | 320 | 54% | 2877 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2889 | 42 | 176 | 49% | 2901 | 36% |
|  |  | E1 | 2842 | 33 | 300 | 48% | 2865 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2592 | 45 | 168 | 50% | 2588 | 24% |
|  |  | E1 | 2476 | 38 | 228 | 49% | 2483 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2755 | 45 | 168 | 54% | 2732 | 27% |
|  |  | E1 | 2723 | 40 | 208 | 50% | 2723 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2593 | 49 | 142 | 49% | 2630 | 28% |
|  |  | E1 | 2668 | 40 | 216 | 50% | 2669 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2260 | 47 | 156 | 54% | 2226 | 27% |
|  |  | E1 | 2315 | 40 | 220 | 50% | 2319 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2664 | 64 | 82 | 53% | 2630 | 28% |
|  |  | E1 | 2727 | 50 | 132 | 49% | 2738 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2704 | 58 | 104 | 55% | 2642 | 28% |
|  |  | E1 | 2587 | 52 | 122 | 51% | 2568 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2334 | 65 | 90 | 55% | 2271 | 17% |
|  |  | E1 | 2337 | 49 | 156 | 55% | 2217 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2696 | 87 | 48 | 51% | 2673 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1735 | 330 | 16 | 100% | 698 | 0% |
|  |  | E1 | 844 | 342 | 6 | 100% | 271 | 0% |