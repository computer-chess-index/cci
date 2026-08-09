# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2935<sub>(+39) | 3189<sub>(+57) | 3259<sub>(+62) |  |
| 1.6 | 2025-10-18 | 2896 | 3132 | 3197 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bitbit+<version>&body=###%20Engine%20name%0ABitbit%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-09 06:23:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2896, 2935]
  line "STC (8.0+0.08s)" [2896, 2935]
  line "LTC (60.0+0.60s)" [3132, 3189]
  line "VLTC (2m24s+1.12s)" [3197, 3259]
  line "VLTC (2m24s+1.12s)" [3197, 3259]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 32 | 258 | 50% | 3263 | 65% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 33 | 248 | 50% | 3190 | 61% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2935 | 32 | 280 | 51% | 2923 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3197 | 24 | 478 | 52% | 3173 | 54% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3132 | 24 | 510 | 52% | 3104 | 52% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2896 | 21 | 692 | 50% | 2882 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |