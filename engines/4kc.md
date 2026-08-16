# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2527<sub>(-49) | 2847<sub>(+43) | 2947<sub>(+15) |  |
| 8.0 | 2026-03-10 | 2576<sub>(+105) | 2804<sub>(+27) | 2932<sub>(+83) |  |
| 5.0 | 2025-10-30 | 2471 | 2777 | 2849 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+4kc+<version>&body=###%20Engine%20name%0A4kc%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-16 06:22:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2471, 2576, 2527]
  line "STC (8.0+0.08s)" [2471, 2576, 2527]
  line "LTC (60.0+0.60s)" [2777, 2804, 2847]
  line "VLTC (2m24s+1.12s)" [2849, 2932, 2947]
  line "VLTC (2m24s+1.12s)" [2849, 2932, 2947]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2947 | 28 | 382 | 48% | 2962 | 40% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2847 | 28 | 396 | 51% | 2839 | 42% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2527 | 26 | 490 | 51% | 2518 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 28 | 402 | 52% | 2912 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 29 | 374 | 51% | 2795 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2576 | 27 | 456 | 50% | 2569 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2849 | 32 | 296 | 49% | 2861 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2777 | 31 | 324 | 48% | 2792 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2471 | 30 | 396 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |