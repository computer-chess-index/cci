# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-06-10 | 2348<sub>(+new) | 2612<sub>(+new) | 2695<sub>(+new) |  |
| 1.4.9 | 2026-05-29 |  |  |  |  |
| 1.4.8 | 2026-05-28 |  |  |  |  |
| 1.4.7 | 2026-05-28 |  |  |  |  |
| 1.4.6 | 2026-05-28 |  |  |  |  |
| 1.4.5 | 2026-05-28 |  |  |  |  |
| 1.4.4 | 2026-05-28 |  |  |  |  |
| 1.4.3 | 2026-05-27 |  |  |  |  |
| 1.4.2 | 2026-05-26 |  |  |  |  |
| 1.4.1 | 2026-05-26 |  |  |  |  |
| 1.4.0 | 2026-05-25 |  |  |  |  |
| 1.3.0 | 2026-05-25 |  |  |  |  |
| 1.2.3 | 2026-05-24 |  |  |  |  |
| 1.2.2 | 2026-05-22 |  |  |  |  |
| 1.2.1 | 2026-05-22 |  |  |  |  |
| 1.2.0 | 2026-05-21 | 2039<sub>(+new) | 2376<sub>(+new) | 2446<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2030 | 2341 | 2453 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Basilisk+<version>&body=###%20Engine%20name%0ABasilisk%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-12 06:22:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2700
  line "STC (8.0+0.08s)" [2030, 2039, 2348]
  line "STC (8.0+0.08s)" [2030, 2039, 2348]
  line "LTC (60.0+0.60s)" [2341, 2376, 2612]
  line "VLTC (2m24s+1.12s)" [2453, 2446, 2695]
  line "VLTC (2m24s+1.12s)" [2453, 2446, 2695]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2695 | 50 | 132 | 53% | 2664 | 29% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2612 | 56 | 112 | 50% | 2608 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2348 | 54 | 124 | 54% | 2310 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2446 | 37 | 246 | 51% | 2438 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2376 | 37 | 244 | 51% | 2367 | 25% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2039 | 39 | 236 | 51% | 2029 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2453 | 48 | 154 | 49% | 2460 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2341 | 45 | 180 | 56% | 2260 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2030 | 50 | 152 | 57% | 1943 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |