# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2533<sub>(-50) | 2853<sub>(+42) | 2958<sub>(+18) |  |
| 8.0 | 2026-03-10 | 2583<sub>(+106) | 2811<sub>(+26) | 2940<sub>(+85) |  |
| 5.0 | 2025-10-30 | 2477 | 2785 | 2855 |  |
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

Generated: 2026-08-22 06:22:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2477, 2583, 2533]
  line "STC (8.0+0.08s)" [2477, 2583, 2533]
  line "LTC (60.0+0.60s)" [2785, 2811, 2853]
  line "VLTC (2m24s+1.12s)" [2855, 2940, 2958]
  line "VLTC (2m24s+1.12s)" [2855, 2940, 2958]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2958 | 28 | 386 | 49% | 2969 | 40% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2853 | 27 | 408 | 51% | 2847 | 42% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2533 | 25 | 498 | 51% | 2525 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2940 | 28 | 402 | 52% | 2919 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2811 | 29 | 374 | 51% | 2803 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2583 | 27 | 456 | 50% | 2576 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2855 | 32 | 296 | 49% | 2867 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2785 | 31 | 324 | 48% | 2800 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2477 | 30 | 396 | 51% | 2472 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |