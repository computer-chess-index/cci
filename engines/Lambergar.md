# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3029<sub>(+131) | 3262<sub>(+64) | 3349<sub>(+75) |  |
| 1.3 | 2025-09-19 | 2898 | 3198 | 3274 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lambergar+<version>&body=###%20Engine%20name%0ALambergar%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 07:57:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2800 --> 3400
  line "STC (8.0+0.08s)" [2898, 3029]
  line "STC (8.0+0.08s)" [2898, 3029]
  line "LTC (60.0+0.60s)" [3198, 3262]
  line "VLTC (2m24s+1.12s)" [3274, 3349]
  line "VLTC (2m24s+1.12s)" [3274, 3349]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3349 | 31 | 258 | 51% | 3340 | 72% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 27 | 372 | 53% | 3237 | 61% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3029 | 31 | 296 | 50% | 3031 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 24 | 462 | 52% | 3260 | 66% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3198 | 26 | 398 | 51% | 3189 | 63% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2898 | 22 | 640 | 53% | 2857 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |