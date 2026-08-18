# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2531<sub>(-49) | 2851<sub>(+43) | 2951<sub>(+13) |  |
| 8.0 | 2026-03-10 | 2580<sub>(+105) | 2808<sub>(+27) | 2938<sub>(+85) |  |
| 5.0 | 2025-10-30 | 2475 | 2781 | 2853 |  |
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

Generated: 2026-08-18 06:22:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2475, 2580, 2531]
  line "STC (8.0+0.08s)" [2475, 2580, 2531]
  line "LTC (60.0+0.60s)" [2781, 2808, 2851]
  line "VLTC (2m24s+1.12s)" [2853, 2938, 2951]
  line "VLTC (2m24s+1.12s)" [2853, 2938, 2951]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 28 | 382 | 48% | 2966 | 40% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2851 | 28 | 400 | 51% | 2843 | 42% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2531 | 26 | 494 | 51% | 2522 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2938 | 28 | 402 | 52% | 2916 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 29 | 374 | 51% | 2799 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2580 | 27 | 456 | 50% | 2573 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2853 | 32 | 296 | 49% | 2865 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2781 | 31 | 324 | 48% | 2796 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2475 | 30 | 396 | 51% | 2469 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |