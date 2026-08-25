# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2874<sub>(+15) | 3137<sub>(+74) | 3229<sub>(+66) |  |
| 1.3 | 2026-02-15 | 2859<sub>(+256) | 3063<sub>(+293) | 3163<sub>(+227) |  |
| 1.2 | 2025-12-12 | 2603<sub>(+282) | 2770<sub>(+170) | 2936<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2321 | 2600 | 2673 | too many irregular games |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:23:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2321, 2603, 2859, 2874]
  line "STC (8.0+0.08s)" [2321, 2603, 2859, 2874]
  line "LTC (60.0+0.60s)" [2600, 2770, 3063, 3137]
  line "VLTC (2m24s+1.12s)" [2673, 2936, 3163, 3229]
  line "VLTC (2m24s+1.12s)" [2673, 2936, 3163, 3229]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3229 | 41 | 160 | 53% | 3210 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3137 | 43 | 164 | 51% | 3128 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2874 | 44 | 156 | 49% | 2885 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 100 | 26 | 56% | 3121 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3063 | 75 | 52 | 46% | 3087 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2859 | 123 | 22 | 52% | 2836 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2936 | 158 | 12 | 46% | 2974 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2770 | 79 | 52 | 52% | 2754 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2603 | 150 | 16 | 63% | 2483 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 101 | 32 | 33% | 2816 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2600 | 145 | 16 | 41% | 2684 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2321 | 71 | 70 | 41% | 2398 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |