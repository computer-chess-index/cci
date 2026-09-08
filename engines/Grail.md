# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2944<sub>(+35) | 3209<sub>(+41) | 3282<sub>(+20) |  |
| 2.0.0 | 2026-05-11 | 2909<sub>(+102) | 3168<sub>(+86) | 3262<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2807<sub>(+354) | 3082<sub>(+362) | 3179<sub>(+321) |  |
| 1.0.4 | 2026-01-16 | 2453<sub>(+127) | 2720<sub>(+38) | 2858<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2326<sub>(+27) | 2682<sub>(+114) | 2757<sub>(+75) |  |
| 1.0.2 | 2025-12-16 | 2299<sub>(+27) | 2568<sub>(+21) | 2682<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2272<sub>(+35) | 2547<sub>(-14) | 2735<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2237 | 2561 | 2789 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:38:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2237, 2272, 2299, 2326, 2453, 2807, 2909, 2944]
  line "STC (8.0+0.08s)" [2237, 2272, 2299, 2326, 2453, 2807, 2909, 2944]
  line "LTC (60.0+0.60s)" [2561, 2547, 2568, 2682, 2720, 3082, 3168, 3209]
  line "" [2789, 2735, 2682, 2757, 2858, 3179, 3262, 3282]
  line "VLTC (2m24s+1.12s)" [2789, 2735, 2682, 2757, 2858, 3179, 3262, 3282]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3282 | 26 | 408 | 51% | 3270 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 25 | 416 | 51% | 3204 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2944 | 26 | 450 | 52% | 2925 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3262 | 29 | 316 | 51% | 3255 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3168 | 29 | 322 | 48% | 3182 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2909 | 29 | 352 | 52% | 2889 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3179 | 27 | 392 | 53% | 3160 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3082 | 28 | 356 | 51% | 3069 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2807 | 28 | 398 | 51% | 2797 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2858 | 34 | 272 | 49% | 2866 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2720 | 35 | 252 | 50% | 2723 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2453 | 31 | 348 | 55% | 2408 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2757 | 43 | 172 | 50% | 2759 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2682 | 45 | 160 | 51% | 2676 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2326 | 44 | 172 | 51% | 2319 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2682 | 38 | 214 | 50% | 2682 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2568 | 35 | 264 | 46% | 2606 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2299 | 41 | 212 | 55% | 2255 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2735 | 42 | 180 | 52% | 2720 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2547 | 40 | 202 | 53% | 2520 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2272 | 50 | 142 | 48% | 2291 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2789 | 61 | 92 | 42% | 2859 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2561 | 59 | 92 | 46% | 2596 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2237 | 67 | 82 | 59% | 2152 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |