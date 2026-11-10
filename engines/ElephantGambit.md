# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2460<sub>(+161) | 2832<sub>(+181) | 2897<sub>(+190) |  |
| 1.0.0 | 2026-10-14 | 2299<sub>(-22) | 2651<sub>(+81) | 2707<sub>(-4) |  |
| 0.15.2 | 2026-10-11 | 2321<sub>(+1481) | 2570<sub>(+new) | 2711<sub>(+30) |  |
| 0.15.1 | 2026-10-11 | 840 |  | 2681 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2591<sub>(+331) | 2890<sub>(+297) | 2958<sub>(+204) |  |
| 1.0.0 | 2026-10-14 | 2260<sub>(-73) | 2593<sub>(-111) | 2754<sub>(+92) |  |
| 0.15.2 | 2026-10-11 | 2333 | 2704 | 2662 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2333 | 2704 | 2662 |  |
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

Generated: 2026-11-10 05:37:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2321, 2299, 2460]
  line "E1: LTC (60.0+0.60s)" [2570, 2651, 2832]
  line "E1: VLTC (2m24s+1.12s)" [2711, 2707, 2897]
  line "P1: STC (8.0+0.08s)" [2333, 2260, 2591]
  line "P1: LTC (60.0+0.60s)" [2704, 2593, 2890]
  line "P1: VLTC (2m24s+1.12s)" [2662, 2754, 2958]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2958 | 39 | 200 | 50% | 2962 | 41% |
|  |  | E1 | 2897 | 32 | 316 | 54% | 2862 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2890 | 43 | 172 | 49% | 2900 | 37% |
|  |  | E1 | 2832 | 33 | 288 | 48% | 2850 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2591 | 45 | 168 | 50% | 2587 | 24% |
|  |  | E1 | 2460 | 38 | 228 | 49% | 2466 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2754 | 45 | 168 | 54% | 2731 | 27% |
|  |  | E1 | 2707 | 40 | 208 | 50% | 2707 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2593 | 49 | 142 | 49% | 2630 | 28% |
|  |  | E1 | 2651 | 40 | 216 | 50% | 2653 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2260 | 47 | 156 | 54% | 2226 | 27% |
|  |  | E1 | 2299 | 40 | 220 | 50% | 2303 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2662 | 64 | 82 | 53% | 2630 | 28% |
|  |  | E1 | 2711 | 50 | 132 | 49% | 2722 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2704 | 58 | 104 | 55% | 2641 | 28% |
|  |  | E1 | 2570 | 52 | 122 | 51% | 2552 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2333 | 65 | 90 | 55% | 2271 | 17% |
|  |  | E1 | 2321 | 49 | 156 | 55% | 2202 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2681 | 87 | 48 | 51% | 2658 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1735 | 330 | 16 | 100% | 697 | 0% |
|  |  | E1 | 840 | 342 | 6 | 100% | 269 | 0% |